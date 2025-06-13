// Conditional Splitter for Easy Sheets Divider
// Advanced splitting based on cell values, dates, and custom conditions

class ConditionalSplitter {
    constructor() {
        this.conditions = [];
        this.operators = {
            'equals': (a, b) => a === b,
            'not_equals': (a, b) => a !== b,
            'contains': (a, b) => String(a).toLowerCase().includes(String(b).toLowerCase()),
            'not_contains': (a, b) => !String(a).toLowerCase().includes(String(b).toLowerCase()),
            'starts_with': (a, b) => String(a).toLowerCase().startsWith(String(b).toLowerCase()),
            'ends_with': (a, b) => String(a).toLowerCase().endsWith(String(b).toLowerCase()),
            'greater_than': (a, b) => Number(a) > Number(b),
            'less_than': (a, b) => Number(a) < Number(b),
            'greater_equal': (a, b) => Number(a) >= Number(b),
            'less_equal': (a, b) => Number(a) <= Number(b),
            'between': (a, b) => {
                const [min, max] = b.split(',').map(v => Number(v.trim()));
                const num = Number(a);
                return num >= min && num <= max;
            },
            'is_empty': (a) => a === '' || a === null || a === undefined,
            'is_not_empty': (a) => a !== '' && a !== null && a !== undefined,
            'date_equals': (a, b) => this.compareDates(a, b, 'equals'),
            'date_before': (a, b) => this.compareDates(a, b, 'before'),
            'date_after': (a, b) => this.compareDates(a, b, 'after'),
            'date_between': (a, b) => this.compareDates(a, b, 'between')
        };
        
        this.init();
    }

    init() {
        this.setupConditionalUI();
    }

    setupConditionalUI() {
        // Create conditional splitting interface
        this.createConditionalInterface();
        this.setupEventListeners();
    }

    createConditionalInterface() {
        const conditionalContainer = document.createElement('div');
        conditionalContainer.id = 'conditionalSplittingContainer';
        conditionalContainer.className = 'conditional-container';
        conditionalContainer.style.display = 'none';
        
        conditionalContainer.innerHTML = `
            <div class="conditional-header">
                <h4>Conditional Splitting Rules</h4>
                <button type="button" class="add-condition-btn" id="addConditionBtn">
                    <i class="fas fa-plus"></i> Add Condition
                </button>
            </div>
            <div class="conditions-list" id="conditionsList"></div>
            <div class="conditional-preview" id="conditionalPreview" style="display: none;">
                <h5>Preview Results</h5>
                <div class="preview-content" id="previewContent"></div>
            </div>
        `;
        
        // Insert after the enable checkbox
        const enableCheckbox = document.getElementById('enableConditionalSplitting');
        if (enableCheckbox && enableCheckbox.parentNode) {
            enableCheckbox.parentNode.insertAdjacentElement('afterend', conditionalContainer);
        }
    }

    setupEventListeners() {
        // Enable/disable conditional splitting
        const enableCheckbox = document.getElementById('enableConditionalSplitting');
        if (enableCheckbox) {
            enableCheckbox.addEventListener('change', (e) => {
                this.toggleConditionalSplitting(e.target.checked);
            });
        }

        // Add condition button
        const addConditionBtn = document.getElementById('addConditionBtn');
        if (addConditionBtn) {
            addConditionBtn.addEventListener('click', () => this.addCondition());
        }
    }

    toggleConditionalSplitting(enabled) {
        const container = document.getElementById('conditionalSplittingContainer');
        if (container) {
            container.style.display = enabled ? 'block' : 'none';
        }
        
        if (enabled && this.conditions.length === 0) {
            this.addCondition(); // Add first condition automatically
        }
    }

    addCondition() {
        const conditionId = `condition_${Date.now()}`;
        const condition = {
            id: conditionId,
            column: '',
            operator: 'equals',
            value: '',
            logicalOperator: 'AND' // AND/OR for multiple conditions
        };
        
        this.conditions.push(condition);
        this.renderCondition(condition);
        this.updatePreview();
    }

    renderCondition(condition) {
        const conditionsList = document.getElementById('conditionsList');
        if (!conditionsList) return;

        const conditionElement = document.createElement('div');
        conditionElement.className = 'condition-item';
        conditionElement.id = condition.id;
        
        conditionElement.innerHTML = `
            <div class="condition-row">
                ${this.conditions.length > 1 ? `
                    <select class="logical-operator" data-condition="${condition.id}">
                        <option value="AND" ${condition.logicalOperator === 'AND' ? 'selected' : ''}>AND</option>
                        <option value="OR" ${condition.logicalOperator === 'OR' ? 'selected' : ''}>OR</option>
                    </select>
                ` : '<span class="condition-label">WHERE</span>'}
                
                <select class="condition-column" data-condition="${condition.id}">
                    <option value="">Select Column...</option>
                    ${this.getColumnOptions()}
                </select>
                
                <select class="condition-operator" data-condition="${condition.id}">
                    ${this.getOperatorOptions(condition.operator)}
                </select>
                
                <input type="text" class="condition-value" data-condition="${condition.id}" 
                       value="${condition.value}" placeholder="Value">
                
                <button type="button" class="remove-condition-btn" data-condition="${condition.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        conditionsList.appendChild(conditionElement);
        this.setupConditionListeners(condition.id);
    }

    getColumnOptions() {
        // Get available columns from current workbook
        if (!window.app || !window.app.currentWorkbook) {
            return '<option value="">No file loaded</option>';
        }
        
        const workbook = window.app.currentWorkbook;
        const firstSheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[firstSheetName];
        
        if (!sheet['!ref']) {
            return '<option value="">No data found</option>';
        }
        
        const range = XLSX.utils.decode_range(sheet['!ref']);
        const options = [];
        
        for (let col = range.s.c; col <= range.e.c; col++) {
            const cellAddress = XLSX.utils.encode_cell({ r: range.s.r, c: col });
            const cell = sheet[cellAddress];
            const columnName = cell ? cell.v : `Column ${col + 1}`;
            const columnLetter = XLSX.utils.encode_col(col);
            
            options.push(`<option value="${columnLetter}">${columnLetter}: ${columnName}</option>`);
        }
        
        return options.join('');
    }

    getOperatorOptions(selected = 'equals') {
        const operators = [
            { value: 'equals', label: 'Equals' },
            { value: 'not_equals', label: 'Not Equals' },
            { value: 'contains', label: 'Contains' },
            { value: 'not_contains', label: 'Does Not Contain' },
            { value: 'starts_with', label: 'Starts With' },
            { value: 'ends_with', label: 'Ends With' },
            { value: 'greater_than', label: 'Greater Than' },
            { value: 'less_than', label: 'Less Than' },
            { value: 'greater_equal', label: 'Greater Than or Equal' },
            { value: 'less_equal', label: 'Less Than or Equal' },
            { value: 'between', label: 'Between (min,max)' },
            { value: 'is_empty', label: 'Is Empty' },
            { value: 'is_not_empty', label: 'Is Not Empty' },
            { value: 'date_equals', label: 'Date Equals' },
            { value: 'date_before', label: 'Date Before' },
            { value: 'date_after', label: 'Date After' },
            { value: 'date_between', label: 'Date Between' }
        ];
        
        return operators.map(op => 
            `<option value="${op.value}" ${op.value === selected ? 'selected' : ''}>${op.label}</option>`
        ).join('');
    }

    setupConditionListeners(conditionId) {
        const conditionElement = document.getElementById(conditionId);
        if (!conditionElement) return;

        // Column change
        const columnSelect = conditionElement.querySelector('.condition-column');
        if (columnSelect) {
            columnSelect.addEventListener('change', (e) => {
                this.updateCondition(conditionId, 'column', e.target.value);
            });
        }

        // Operator change
        const operatorSelect = conditionElement.querySelector('.condition-operator');
        if (operatorSelect) {
            operatorSelect.addEventListener('change', (e) => {
                this.updateCondition(conditionId, 'operator', e.target.value);
                this.updateValueInput(conditionId, e.target.value);
            });
        }

        // Value change
        const valueInput = conditionElement.querySelector('.condition-value');
        if (valueInput) {
            valueInput.addEventListener('input', (e) => {
                this.updateCondition(conditionId, 'value', e.target.value);
            });
        }

        // Logical operator change
        const logicalSelect = conditionElement.querySelector('.logical-operator');
        if (logicalSelect) {
            logicalSelect.addEventListener('change', (e) => {
                this.updateCondition(conditionId, 'logicalOperator', e.target.value);
            });
        }

        // Remove condition
        const removeBtn = conditionElement.querySelector('.remove-condition-btn');
        if (removeBtn) {
            removeBtn.addEventListener('click', () => {
                this.removeCondition(conditionId);
            });
        }
    }

    updateCondition(conditionId, property, value) {
        const condition = this.conditions.find(c => c.id === conditionId);
        if (condition) {
            condition[property] = value;
            this.updatePreview();
        }
    }

    updateValueInput(conditionId, operator) {
        const conditionElement = document.getElementById(conditionId);
        const valueInput = conditionElement.querySelector('.condition-value');
        
        if (!valueInput) return;
        
        // Update placeholder and input type based on operator
        switch (operator) {
            case 'between':
                valueInput.placeholder = 'min,max (e.g., 10,100)';
                break;
            case 'date_equals':
            case 'date_before':
            case 'date_after':
                valueInput.type = 'date';
                valueInput.placeholder = 'YYYY-MM-DD';
                break;
            case 'date_between':
                valueInput.type = 'text';
                valueInput.placeholder = 'start,end (YYYY-MM-DD,YYYY-MM-DD)';
                break;
            case 'is_empty':
            case 'is_not_empty':
                valueInput.disabled = true;
                valueInput.placeholder = 'No value needed';
                break;
            default:
                valueInput.type = 'text';
                valueInput.disabled = false;
                valueInput.placeholder = 'Value';
                break;
        }
    }

    removeCondition(conditionId) {
        this.conditions = this.conditions.filter(c => c.id !== conditionId);
        
        const conditionElement = document.getElementById(conditionId);
        if (conditionElement) {
            conditionElement.remove();
        }
        
        this.updatePreview();
        this.reorderConditions();
    }

    reorderConditions() {
        // Update logical operators after removing conditions
        const conditionsList = document.getElementById('conditionsList');
        if (!conditionsList) return;

        const conditionElements = conditionsList.querySelectorAll('.condition-item');
        conditionElements.forEach((element, index) => {
            const logicalOperator = element.querySelector('.logical-operator');
            const conditionLabel = element.querySelector('.condition-label');
            
            if (index === 0) {
                // First condition should show "WHERE"
                if (logicalOperator) {
                    logicalOperator.style.display = 'none';
                }
                if (!conditionLabel) {
                    const label = document.createElement('span');
                    label.className = 'condition-label';
                    label.textContent = 'WHERE';
                    element.querySelector('.condition-row').insertBefore(label, element.querySelector('.condition-column'));
                }
            } else {
                // Other conditions should show logical operators
                if (logicalOperator) {
                    logicalOperator.style.display = 'block';
                }
                if (conditionLabel) {
                    conditionLabel.remove();
                }
            }
        });
    }

    updatePreview() {
        if (!window.app || !window.app.currentWorkbook || this.conditions.length === 0) {
            this.hidePreview();
            return;
        }
        
        try {
            const results = this.previewSplit();
            this.showPreview(results);
        } catch (error) {
            console.error('Preview error:', error);
            this.hidePreview();
        }
    }

    previewSplit() {
        const workbook = window.app.currentWorkbook;
        const firstSheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[firstSheetName];
        
        if (!sheet['!ref']) {
            return { groups: [], total: 0 };
        }
        
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        const groups = new Map();
        
        // Process each row (skip header)
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            const matchResult = this.evaluateConditions(row);
            
            if (matchResult.matches) {
                const groupKey = matchResult.groupKey || 'default';
                if (!groups.has(groupKey)) {
                    groups.set(groupKey, []);
                }
                groups.get(groupKey).push(i);
            }
        }
        
        return {
            groups: Array.from(groups.entries()).map(([key, rows]) => ({
                name: key,
                count: rows.length,
                rows: rows.slice(0, 5) // Show first 5 rows for preview
            })),
            total: data.length - 1 // Exclude header
        };
    }

    evaluateConditions(row) {
        if (this.conditions.length === 0) {
            return { matches: true, groupKey: 'all' };
        }
        
        let result = null;
        let groupKey = '';
        
        for (let i = 0; i < this.conditions.length; i++) {
            const condition = this.conditions[i];
            const columnIndex = this.getColumnIndex(condition.column);
            const cellValue = row[columnIndex];
            
            const conditionResult = this.evaluateCondition(cellValue, condition);
            
            if (i === 0) {
                result = conditionResult;
            } else {
                if (condition.logicalOperator === 'AND') {
                    result = result && conditionResult;
                } else { // OR
                    result = result || conditionResult;
                }
            }
            
            // Build group key for matching rows
            if (conditionResult) {
                groupKey += `${condition.column}:${cellValue}_`;
            }
        }
        
        return {
            matches: result,
            groupKey: groupKey.slice(0, -1) // Remove trailing underscore
        };
    }

    evaluateCondition(cellValue, condition) {
        const operator = this.operators[condition.operator];
        if (!operator) return false;
        
        try {
            if (condition.operator === 'is_empty' || condition.operator === 'is_not_empty') {
                return operator(cellValue);
            }
            
            return operator(cellValue, condition.value);
        } catch (error) {
            console.warn('Condition evaluation error:', error);
            return false;
        }
    }

    getColumnIndex(columnLetter) {
        return XLSX.utils.decode_col(columnLetter);
    }

    compareDates(dateA, dateB, operation) {
        try {
            const dateObjA = new Date(dateA);
            const dateObjB = new Date(dateB);
            
            if (isNaN(dateObjA.getTime()) || isNaN(dateObjB.getTime())) {
                return false;
            }
            
            switch (operation) {
                case 'equals':
                    return dateObjA.getTime() === dateObjB.getTime();
                case 'before':
                    return dateObjA < dateObjB;
                case 'after':
                    return dateObjA > dateObjB;
                case 'between':
                    const [startDate, endDate] = dateB.split(',').map(d => new Date(d.trim()));
                    return dateObjA >= startDate && dateObjA <= endDate;
                default:
                    return false;
            }
        } catch (error) {
            return false;
        }
    }

    showPreview(results) {
        const previewContainer = document.getElementById('conditionalPreview');
        const previewContent = document.getElementById('previewContent');
        
        if (!previewContainer || !previewContent) return;
        
        if (results.groups.length === 0) {
            previewContent.innerHTML = '<p class="no-results">No rows match the specified conditions.</p>';
        } else {
            const groupsHtml = results.groups.map(group => `
                <div class="preview-group">
                    <strong>${group.name}</strong>: ${group.count} rows
                </div>
            `).join('');
            
            previewContent.innerHTML = `
                <div class="preview-summary">
                    <p>Will create ${results.groups.length} file(s) from ${results.total} total rows:</p>
                    ${groupsHtml}
                </div>
            `;
        }
        
        previewContainer.style.display = 'block';
    }

    hidePreview() {
        const previewContainer = document.getElementById('conditionalPreview');
        if (previewContainer) {
            previewContainer.style.display = 'none';
        }
    }

    // Apply conditional splitting to workbook
    applySplit(workbook) {
        if (this.conditions.length === 0) {
            return { default: workbook };
        }
        
        const results = {};
        
        workbook.SheetNames.forEach(sheetName => {
            const sheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            const groups = new Map();
            
            // Add header to all groups
            const header = data[0];
            
            // Process data rows
            for (let i = 1; i < data.length; i++) {
                const row = data[i];
                const matchResult = this.evaluateConditions(row);
                
                if (matchResult.matches) {
                    const groupKey = matchResult.groupKey || 'default';
                    if (!groups.has(groupKey)) {
                        groups.set(groupKey, [header]);
                    }
                    groups.get(groupKey).push(row);
                }
            }
            
            // Create workbooks for each group
            groups.forEach((rows, groupKey) => {
                if (!results[groupKey]) {
                    results[groupKey] = XLSX.utils.book_new();
                }
                
                const newSheet = XLSX.utils.aoa_to_sheet(rows);
                XLSX.utils.book_append_sheet(results[groupKey], newSheet, sheetName);
            });
        });
        
        return results;
    }

    // Get conditions for export
    getConditions() {
        return this.conditions.filter(c => c.column && c.operator);
    }

    // Clear all conditions
    clearConditions() {
        this.conditions = [];
        const conditionsList = document.getElementById('conditionsList');
        if (conditionsList) {
            conditionsList.innerHTML = '';
        }
        this.hidePreview();
    }
}

// Create global conditional splitter instance
window.conditionalSplitter = new ConditionalSplitter();

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ConditionalSplitter;
}
