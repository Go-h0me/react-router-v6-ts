import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { invoices } from "../data/invoices";

const Invoice = () => {


  const params = useParams<{ invoiceId: string }>();
  const navigate = useNavigate()
  const invoice = invoices.find(
    (invoice) => invoice.id.toString() === params.invoiceId
  );

    useEffect(() => {
      if(!invoice) navigate('..')
    },[invoice])

  return (
    <h2 style={{ padding: "1rem" }}>
      {invoice
        ? `Invoice #${invoice?.id} for ${invoice?.name}`
        : "No Invoice found"}
    </h2>
  );
};

export default Invoice;
