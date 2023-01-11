import { useEffect, useState } from 'react';
import { requestDossierPDF } from '../requests/DossierRequests';
import { useParams } from 'react-router-dom';


export const DossierPDF = ({token, props}) => {
    const [pdfPreviewUrl, setPdfPreviewUrl] = useState('');
    const { pk } = useParams();

    useEffect(() => {
        requestDossierPDF(token, pk)
            .then(response => {
                setPdfPreviewUrl(response.data.pdf_preview_url);
            });
    }, [token]);

    return (
        <>
        <div>
            {pdfPreviewUrl && <a href={pdfPreviewUrl} target="_blank">Preview PDF</a>}
        </div>
        <object data={pdfPreviewUrl} type="application/pdf" width="100%" height="100%">
            <p>Alternative text - include a link <a href={pdfPreviewUrl}>to the PDF!</a></p>
        </object>
        </>
    );
}
