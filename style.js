const test = require("test");

function run() {
    g.setFont("4x6:3");
    g.clear();
    const bt = new BlockedText("HELLO MARGO", 0, 0, 8, "#fff", "#000");
    bt.draw();
    console.log(test.testData);
}

class BlockedText {
    constructor(text, x, y, padding, textColor, blockColor) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.padding = padding;
        this.textColor = textColor;
        this.blockColor = blockColor;
        this.textWidth = getStringWidth(text);
        this.textHeight = getStringHeight(text);
        this.blockWidth = this.textWidth + (padding * 2);
        this.blockHeight = this.textHeight + (padding * 2);
    }

    draw() {
        g.setColor(this.blockColor);
        g.fillRect(this.x, this.y, this.x + this.blockWidth, this.y + this.blockHeight);
        g.setColor(this.textColor);
        g.drawString(this.text, this.x + this.padding + 2, this.y + this.padding + 2);
    }
}

function getStringWidth(string) {
    const width = getFontWidth();
    const numberOfChars = string.length;
    return (numberOfChars * width) + 1;
}

function getStringHeight() {
    const height = getFontHeight();
    return height;
}

function getFontWidth() {
    const font = g.getFont();
    const fontParts = font.split(":");
    if(fontParts.length === 1) return 4;
    else {
        const scale = fontParts[1];
        return 4 * Number(scale);
    }
}

function getFontHeight() {
    return g.getFontHeight();
}

exports.run = run;
exports.BlockedText = BlockedText;