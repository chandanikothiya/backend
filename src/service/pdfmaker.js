const pdfmake = require('pdfmake');

const makepdf = async () => {
    const fonts = {
        Roboto: {
            normal: './public/fonts/Roboto-Regular.ttf',
            bold: './public/fonts/Roboto-Medium.ttf',
            italics: './public/fonts/Roboto-Italic.ttf',
            bolditalics: './public/fonts/Roboto-MediumItalic.ttf'
        }
    };


    pdfmake.addFonts(fonts);

    const docDefinition = {
        content: [
            'First paragraph',
            
            'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
            { text: 'Tables', style: 'header' },
            'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
            { text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader' },
            'The following table has nothing more than a body array',
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Column 1', 'Column 2', 'Column 3'],
                        ['One value goes here', 'Another one here', 'OK?']
                    ]
                }
            },
        ]
    };



    const pdf = pdfmake.createPdf(docDefinition);
    pdf.write('pdf1.pdf').then(() => {
        // success event
    }, err => {
        // error event
        console.error(err);
    });
}

module.exports = makepdf