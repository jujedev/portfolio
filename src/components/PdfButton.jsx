import React from 'react';

const PdfButton = () => {
    const openPdf = () => {
        const pdfUrl = '/CV_Maldonado_Mauricio_cb.pdf'; // Ajusta la ruta al PDF
        window.open(pdfUrl, '_blank'); // Abre en nueva pestaña
    };

    return (
        <button className="hover:transform hover:scale-105 bg-gradient-to-b from-cyan-500 to-cyan-600 text-white font-bold px-4 py-2 rounded-full ml-8" onClick={openPdf} style={{ padding: '10px', fontSize: '16px' } }>
            Ver CV
        </button>
    );
};

export default PdfButton;