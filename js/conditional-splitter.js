// Easy Sheets Divider - Conditional Splitting System
// Advanced splitting based on cell values, date ranges, and numerical thresholds

class ConditionalSplitter {
    constructor(languageManager) {
        this.languageManager = languageManager;
        
        this.conditions = [];
        this.splitResults = [];
        
        this.conditionTypes = {
            CELL_VALUE: 'cell_value',
            DATE_RANGE: 'date_range',
            NUMERICAL_THRESHOLD: 'numerical_threshold',
            TEXT_CONTAINS: 'text_contains',
            REGEX_MATCH: 'regex_match'
        };
        
        this.operators = {
            EQUALS: 'equals',
            NOT_EQUALS: 'not_equals',
            CONTAINS: 'contains',
            NOT_CONTAINS: 'not_contains',
            STARTS_WITH: 'starts_with',
            ENDS_WITH: 'ends_with',
            GREATER_THAN: 'greater_than',
            LESS_THAN: 'less_than',
            GREATER_EQUAL: 'greater_equal',
            LESS_EQUAL: 'less_equal',
            BETWEEN: 'between',
            NOT_BETWEEN: 'not_between'
        };
        
        this.dateFormats = [
            'YYYY-MM-DD',
            'MM/DD/YYYY',
            'DD/MM/YYYY',
            'YYYY/MM/DD',
            'MM-DD-YYYY',
            'DD-MM-YYYY'
        ];
        
        this.init();
    }
    
    init() {
        this.createConditionalSplittingUI();
        this.setupEventListeners();
    }
    
    // Create conditional splitting UI
    createConditionalSplittingUI() {
        const conditionalSection = document.createElement('div');
        conditionalSection.id = 'conditionalSplittingSection';
        conditionalSection.className = 'options-section';
        conditionalSection.style.display = 'none';
        
        conditionalSection.innerHTML = `
            <div class="section-header">
                <h3>
                    <i class="fas fa-filter"></i>
                    <span data-translate="conditionalSplitting">Conditional Splitting</span>
                </h3>
                <p class="section-description" data-translate="conditionalSplittingDesc">
                    Split files based on specific conditions like cell values, date ranges, or numerical thresholds
                </p>
            </div>
            
            <div class="conditional-controls">
                <div class="condition-builder">
                    <div class="condition-header">
                        <h4 data-translate="addCondition">Add Condition</h4>
                        <button class="btn btn-primary btn-sm" id="addConditionBtn">
                            <i class="fas fa-plus"></i>
                            <span data-translate="addNew">Add New</span>
                        </button>
                    </div>
                    
                    <div class="condition-form" id="conditionForm">
                        <div class="form-row">
                            <div class="form-group">
                                <label data-translate="conditionType">Condition Type</label>
                                <select id="conditionType" class="form-control">
                                    <option value="cell_value" data-translate="cellValue">Cell Value</option>
                                    <option value="date_range" data-translate="dateRange">Date Range</option>
                                    <option value="numerical_threshold" data-translate="numericalThreshold">Numerical Threshold</option>
                                    <option value="text_contains" data-translate="textContains">Text Contains</option>
                                    <option value="regex_match" data-translate="regexMatch">Regex Match</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label data-translate="targetColumn">Target Column</label>
                                <select id="conditionColumn" class="form-control">
                                    <option value="" data-translate="selectColumn">Select Column...</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label data-translate="operator">Operator</label>
                                <select id="conditionOperator" class="form-control">
                                    <option value="equals" data-translate="equals">Equals</option>
                                    <option value="not_equals" data-translate="notEquals">Not Equals</option>
                                    <option value="contains" data-translate="contains">Contains</option>
                                    <option value="not_contains" data-translate="notContains">Not Contains</option>
                                    <option value="starts_with" data-translate="startsWith">Starts With</option>
                                    <option value="ends_with" data-translate="endsWith">Ends With</option>
                                    <option value="greater_than" data-translate="greaterThan">Greater Than</option>
                                    <option value="less_than" data-translate="lessThan">Less Than</option>
                                    <option value="greater_equal" data-translate="greaterEqual">Greater or Equal</option>
                                    <option value="less_equal" data-translate="lessEqual">Less or Equal</option>
                                    <option value="between" data-translate="between">Between</option>
                                    <option value="not_between" data-translate="notBetween">Not Between</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label data-translate="value">Value</label>
                                <input type="text" id="conditionValue" class="form-control" placeholder="Enter value...">
                            </div>
                        </div>
                        
                        <div class="form-row" id="secondValueRow" style="display: none;">
                            <div class="form-group">
                                <label data-translate="secondValue">Second Value</label>
                                <input type="text" id="conditionValue2" class="form-control" placeholder="Enter second value...">
                            </div>
                        </div>
                        
                        <div class="form-row" id="dateFormatRow" style="display: none;">
                            <div class="form-group">
                                <label data-translate="dateFormat">Date Format</label>
                                <select id="dateFormat" class="form-control">
                                    <option value="YYYY-MM-DD">YYYY-MM-DD (2024-01-15)</option>
                                    <option value="MM/DD/YYYY">MM/DD/YYYY (01/15/2024)</option>
                                    <option value="DD/MM/YYYY">DD/MM/YYYY (15/01/2024)</option>
                                    <option value="YYYY/MM/DD">YYYY/MM/DD (2024/01/15)</option>
                                    <option value="MM-DD-YYYY">MM-DD-YYYY (01-15-2024)</option>
                                    <option value="DD-MM-YYYY">DD-MM-YYYY (15-01-2024)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-actions">
                            <button class="btn btn-success" id="saveConditionBtn">
                                <i class="fas fa-save"></i>
                                <span data-translate="saveCondition">Save Condition</span>
                            </button>
                            <button class="btn btn-secondary" id="cancelConditionBtn">
                                <i class="fas fa-times"></i>
                                <span data-translate="cancel">Cancel</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="conditions-list">
                    <h4 data-translate="activeConditions">Active Conditions</h4>
                    <div id="conditionsList" class="conditions-container">
                        <div class="no-conditions" data-translate="noConditionsAdded">
                            No conditions added yet. Add conditions to enable conditional splitting.
                        </div>
                    </div>
                </div>
                
                <div class="conditional-actions">
                    <button class="btn btn-primary" id="previewConditionalSplit" disabled>
                        <i class="fas fa-eye"></i>
                        <span data-translate="previewSplit">Preview Split</span>
                    </button>
                    <button class="btn btn-success" id="executeConditionalSplit" disabled>
                        <i class="fas fa-cut"></i>
                        <span data-translate="executeSplit">Execute Split</span>
                    </button>
                </div>
            </div>
        `;
        
        // Insert after the splitting method section
        const splittingMethodSection = document.querySelector('.splitting-method');
        if (splittingMethodSection) {
            splittingMethodSection.parentNode.insertBefore(conditionalSection, splittingMethodSection.nextSibling);
        }
    }
    
    // Setup event listeners
    setupEventListeners() {
        // Add condition button
        document.getElementById('addConditionBtn')?.addEventListener('click', () => {
            this.showConditionForm();
        });
        
        // Save condition button
        document.getElementById('saveConditionBtn')?.addEventListener('click', () => {
            this.saveCondition();
        });
        
        // Cancel condition button
        document.getElementById('cancelConditionBtn')?.addEventListener('click', () => {
            this.hideConditionForm();
        });
        
        // Condition type change
        document.getElementById('conditionType')?.addEventListener('change', (e) => {
            this.updateConditionForm(e.target.value);
        });
        
        // Operator change
        document.getElementById('conditionOperator')?.addEventListener('change', (e) => {
            this.updateOperatorForm(e.target.value);
        });
        
        // Preview split button
        document.getElementById('previewConditionalSplit')?.addEventListener('click', () => {
            this.previewConditionalSplit();
        });
        
        // Execute split button
        document.getElementById('executeConditionalSplit')?.addEventListener('click', () => {
            this.executeConditionalSplit();
        });
    }
    
    // Show condition form
    showConditionForm() {
        const form = document.getElementById('conditionForm');
        if (form) {
            form.style.display = 'block';
            this.resetConditionForm();
        }
    }
    
    // Hide condition form
    hideConditionForm() {
        const form = document.getElementById('conditionForm');
        if (form) {
            form.style.display = 'none';
        }
    }
    
    // Reset condition form
    resetConditionForm() {
        document.getElementById('conditionType').value = 'cell_value';
        document.getElementById('conditionColumn').value = '';
        document.getElementById('conditionOperator').value = 'equals';
        document.getElementById('conditionValue').value = '';
        document.getElementById('conditionValue2').value = '';
        document.getElementById('dateFormat').value = 'YYYY-MM-DD';
        
        this.updateConditionForm('cell_value');
        this.updateOperatorForm('equals');
    }
    
    // Update condition form based on type
    updateConditionForm(type) {
        const dateFormatRow = document.getElementById('dateFormatRow');
        const operatorSelect = document.getElementById('conditionOperator');
        
        // Reset operator options
        operatorSelect.innerHTML = '';
        
        switch (type) {
            case 'cell_value':
            case 'text_contains':
                this.addOperatorOptions(['equals', 'not_equals', 'contains', 'not_contains', 'starts_with', 'ends_with']);
                dateFormatRow.style.display = 'none';
                break;
                
            case 'date_range':
                this.addOperatorOptions(['equals', 'greater_than', 'less_than', 'greater_equal', 'less_equal', 'between', 'not_between']);
                dateFormatRow.style.display = 'block';
                break;
                
            case 'numerical_threshold':
                this.addOperatorOptions(['equals', 'not_equals', 'greater_than', 'less_than', 'greater_equal', 'less_equal', 'between', 'not_between']);
                dateFormatRow.style.display = 'none';
                break;
                
            case 'regex_match':
                this.addOperatorOptions(['equals', 'not_equals']);
                dateFormatRow.style.display = 'none';
                break;
        }
        
        this.updateOperatorForm(operatorSelect.value);
    }
    
    // Add operator options to select
    addOperatorOptions(operators) {
        const operatorSelect = document.getElementById('conditionOperator');
        
        operators.forEach(op => {
            const option = document.createElement('option');
            option.value = op;
            option.setAttribute('data-translate', op);
            option.textContent = this.getOperatorDisplayName(op);
            operatorSelect.appendChild(option);
        });
    }
    
    // Update operator form
    updateOperatorForm(operator) {
        const secondValueRow = document.getElementById('secondValueRow');
        
        if (operator === 'between' || operator === 'not_between') {
            secondValueRow.style.display = 'block';
        } else {
            secondValueRow.style.display = 'none';
        }
    }
    
    // Get operator display name
    getOperatorDisplayName(operator) {
        const names = {
            equals: 'Equals',
            not_equals: 'Not Equals',
            contains: 'Contains',
            not_contains: 'Not Contains',
            starts_with: 'Starts With',
            ends_with: 'Ends With',
            greater_than: 'Greater Than',
            less_than: 'Less Than',
            greater_equal: 'Greater or Equal',
            less_equal: 'Less or Equal',
            between: 'Between',
            not_between: 'Not Between'
        };
        
        return names[operator] || operator;
    }
    
    // Save condition
    saveCondition() {
        const type = document.getElementById('conditionType').value;
        const column = document.getElementById('conditionColumn').value;
        const operator = document.getElementById('conditionOperator').value;
        const value = document.getElementById('conditionValue').value;
        const value2 = document.getElementById('conditionValue2').value;
        const dateFormat = document.getElementById('dateFormat').value;
        
        // Validate condition
        if (!column || !value) {
            alert(this.languageManager?.translate('pleaseCompleteCondition') || 'Please complete all required fields');
            return;
        }
        
        if ((operator === 'between' || operator === 'not_between') && !value2) {
            alert(this.languageManager?.translate('pleaseEnterSecondValue') || 'Please enter a second value for range conditions');
            return;
        }
        
        // Create condition object
        const condition = {
            id: Date.now(),
            type: type,
            column: column,
            operator: operator,
            value: value,
            value2: value2,
            dateFormat: dateFormat,
            displayName: this.generateConditionDisplayName(type, column, operator, value, value2)
        };
        
        // Add to conditions array
        this.conditions.push(condition);
        
        // Update UI
        this.updateConditionsList();
        this.updateConditionalButtons();
        this.hideConditionForm();
        
        console.log('Condition saved:', condition);
    }
    
    // Generate condition display name
    generateConditionDisplayName(type, column, operator, value, value2) {
        const columnName = this.getColumnDisplayName(column);
        const operatorName = this.getOperatorDisplayName(operator);
        
        let displayName = `${columnName} ${operatorName} "${value}"`;
        
        if (value2 && (operator === 'between' || operator === 'not_between')) {
            displayName = `${columnName} ${operatorName} "${value}" and "${value2}"`;
        }
        
        return displayName;
    }
    
    // Get column display name
    getColumnDisplayName(columnIndex) {
        const columnSelect = document.getElementById('conditionColumn');
        const option = columnSelect.querySelector(`option[value="${columnIndex}"]`);
        return option ? option.textContent : `Column ${columnIndex}`;
    }
    
    // Update conditions list
    updateConditionsList() {
        const container = document.getElementById('conditionsList');
        
        if (this.conditions.length === 0) {
            container.innerHTML = `
                <div class="no-conditions" data-translate="noConditionsAdded">
                    No conditions added yet. Add conditions to enable conditional splitting.
                </div>
            `;
        } else {
            container.innerHTML = this.conditions.map(condition => `
                <div class="condition-item" data-condition-id="${condition.id}">
                    <div class="condition-content">
                        <div class="condition-type">
                            <i class="fas fa-filter"></i>
                            <span class="type-label">${this.getConditionTypeDisplayName(condition.type)}</span>
                        </div>
                        <div class="condition-description">
                            ${condition.displayName}
                        </div>
                    </div>
                    <div class="condition-actions">
                        <button class="btn btn-sm btn-secondary" onclick="conditionalSplitter.editCondition(${condition.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="conditionalSplitter.removeCondition(${condition.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Get condition type display name
    getConditionTypeDisplayName(type) {
        const names = {
            cell_value: 'Cell Value',
            date_range: 'Date Range',
            numerical_threshold: 'Numerical',
            text_contains: 'Text',
            regex_match: 'Regex'
        };
        
        return names[type] || type;
    }
    
    // Update conditional buttons
    updateConditionalButtons() {
        const previewBtn = document.getElementById('previewConditionalSplit');
        const executeBtn = document.getElementById('executeConditionalSplit');
        
        const hasConditions = this.conditions.length > 0;
        
        if (previewBtn) previewBtn.disabled = !hasConditions;
        if (executeBtn) executeBtn.disabled = !hasConditions;
    }
    
    // Remove condition
    removeCondition(conditionId) {
        this.conditions = this.conditions.filter(c => c.id !== conditionId);
        this.updateConditionsList();
        this.updateConditionalButtons();
    }
    
    // Edit condition
    editCondition(conditionId) {
        const condition = this.conditions.find(c => c.id === conditionId);
        if (condition) {
            // Populate form with condition data
            document.getElementById('conditionType').value = condition.type;
            document.getElementById('conditionColumn').value = condition.column;
            document.getElementById('conditionOperator').value = condition.operator;
            document.getElementById('conditionValue').value = condition.value;
            document.getElementById('conditionValue2').value = condition.value2 || '';
            document.getElementById('dateFormat').value = condition.dateFormat || 'YYYY-MM-DD';
            
            // Update form
            this.updateConditionForm(condition.type);
            this.updateOperatorForm(condition.operator);
            
            // Remove condition and show form
            this.removeCondition(conditionId);
            this.showConditionForm();
        }
    }
    
    // Show conditional splitting section
    show() {
        const section = document.getElementById('conditionalSplittingSection');
        if (section) {
            section.style.display = 'block';
        }
    }
    
    // Hide conditional splitting section
    hide() {
        const section = document.getElementById('conditionalSplittingSection');
        if (section) {
            section.style.display = 'none';
        }
    }
    
    // Populate column options
    populateColumnOptions(workbook) {
        const columnSelect = document.getElementById('conditionColumn');
        if (!columnSelect || !workbook) return;
        
        columnSelect.innerHTML = '<option value="" data-translate="selectColumn">Select Column...</option>';
        
        if (workbook.SheetNames.length > 0) {
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const range = XLSX.utils.decode_range(firstSheet['!ref'] || 'A1:A1');
            
            // Get headers from first row
            for (let col = range.s.c; col <= range.e.c; col++) {
                const cellAddress = XLSX.utils.encode_cell({ r: 0, c: col });
                const cell = firstSheet[cellAddress];
                const headerValue = cell ? cell.v : `Column ${XLSX.utils.encode_col(col)}`;
                
                const option = document.createElement('option');
                option.value = col;
                option.textContent = headerValue;
                columnSelect.appendChild(option);
            }
        }
    }
    
    // Preview conditional split
    previewConditionalSplit() {
        console.log('Previewing conditional split with conditions:', this.conditions);
        // Implementation for preview will be added
    }
    
    // Execute conditional split
    executeConditionalSplit() {
        console.log('Executing conditional split with conditions:', this.conditions);
        // Implementation for execution will be added
    }
    
    // Get conditions
    getConditions() {
        return this.conditions;
    }
    
    // Clear all conditions
    clearConditions() {
        this.conditions = [];
        this.updateConditionsList();
        this.updateConditionalButtons();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ConditionalSplitter;
} else if (typeof window !== 'undefined') {
    window.ConditionalSplitter = ConditionalSplitter;
}
