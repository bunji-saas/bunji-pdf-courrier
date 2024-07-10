import React from "react";
type TemplateData = {
    companyName: string;
    companyPhone: string;
    companyEmail: string;
    receiptNumber: string;
    datePaid: string;
    paymentMethod: string;
    amount: string;
};
interface PDFProps {
    data: TemplateData;
}
declare const PDF: ({ data }: PDFProps) => React.JSX.Element;
export default PDF;
