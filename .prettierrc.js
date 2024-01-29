module.exports = {
    trailingComma: 'all',
    useTabs: false,
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    overrides: [
        { files: '*.ts', options: { parser: 'typescript' } },
        { files: '*.json', options: { tabWidth: 2 } },
    ],
}
