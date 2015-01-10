Blockly.Blocks['text_length'] = {
  init: function() {
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    this.setColour(160);
    this.appendValueInput('VALUE')
        .setCheck('String')
        .appendField('silly block');
    this.setOutput(true, 'Number');
    this.setTooltip('Returns rubbish.');
  }
};
