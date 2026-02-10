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
            {
                alignment: 'justify',
                columns: [
                    {
                        image: './public/images/amazone.png',
                        width: 180,
                        heigth: 50
                    },
                    {
                        stack: [
                            { text: 'Tax Invoice/Bill of Supply/Cash Memo', bold: true, alignment: 'right' },
                            { text: '(Original for Recipient)', alignment: 'right' }
                        ],
                    }
                ],
                margin: [0, 0, 0, 20]
            },
            {
                alignment: 'justify',
                columns: [
                    {
                        stack: [
                            { text: 'Sold By :', bold: true },
                            { text: 'SUPER MARKETING' },
                            { text: '* Super Marketinrg Agency, Plot No. 613, Sumer' },
                            { text: 'Nagar Main, Nea, r Gagan Bharti School,r' },
                            { text: 'Mansarovar Jaipur - 302020' },
                            { text: 'JAIPUR, RAJASTHAN, 302020' },
                            { text: 'IN' }
                        ],
                    },
                    {
                        stack: [
                            { text: 'Billing Address :', bold: true, alignment: 'right' },
                            { text: 'Ankitkumar Navinbhai dharsandiya', alignment: 'right' },
                            { text: 'A1 402, Opera palm, Kholvad Road', alignment: 'right' },
                            { text: 'SURAT, GUJARAT, 394185', alignment: 'right' },
                            { text: 'IN', alignment: 'right' },
                            {
                                text: [
                                    { text: 'State/UT Code:', bold: true },
                                    { text: 24 }
                                ], alignment: 'right'
                            }
                        ],
                    }
                ],
                margin: [0, 0, 0, 20]
            },
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            {text:'SI.NO',fillColor:'#808080'},
                            {text:'Description',fillColor:'#808080'},
                            {text:'UNIT PRICE',fillColor:'#808080'},
                            {text:'Qty',fillColor:'#808080'},
                            {text:'NET AMOUNT',fillColor:'#808080'},
                            {text:'TAX RATE',fillColor:'#808080'},
                            {text:'TAX TYPE',fillColor:'#808080'},
                            {text:'TAX AMOUNT',fillColor:'#808080'},
                            {text:'Total AMOUNT',fillColor:'#808080'}
                        ],
                        [
                            {text:'1',rowSpan:2},
                            {
                                text:'Google Review NFC Card Along with QR Code | Tap or Scan for\nReviews/Feedback | PVC Card with UV Print | Pre-Printed Multicolored\n| B0CYD64SY3 ( GRC1001 )\nHSN:5201',
                                border:[true,true,true,false]
                            },
                            {text:"₹117.80",border:[true,true,true,false]},
                            {text:"2",border:[true,true,true,false]},
                            {text:"₹235.60",border:[true,true,true,false]},
                            {text:"18%",border:[true,true,true,false]},
                            {text:"IGST",border:[true,true,true,false]},
                            {text:"₹42.40",border:[true,true,true,false]},
                            {text:"₹278.00",border:[true,true,true,false]},
                        ],
                         [
                            {text:""},
                            {
                                text:'Shipping Charges',
                                border:[true,false,true,true]
                            },
                            {text:"₹33.90",border:[true,false,true,true]},
                            {text:"",border:[true,false,true,true]},
                            {text:"₹67.80",border:[true,false,true,true]},
                            {text:"18%",border:[true,false,true,true]},
                            {text:"IGST",border:[true,false,true,true]},
                            {text:"₹12.20",border:[true,false,true,true]},
                            {text:"₹80.00",border:[true,false,true,true]},
                        ],
                        [
                            {text:'TOTAL:',colSpan:7,alignment:'left'},
                            '','','','','','',
                            {text:'₹54.60',fillColor:'#808080'},
                            {text:'₹358.00',fillColor:'#808080'}
                        ]

                    ]
                }
            }
        ],

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