import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../Provider/AuthProvider';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import BlogPDF from './BlogPDF';



const Blog = () => {
    const [title, setTitle] = useState('My Blog Title');
    const [content, setContent] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  
    const [showPDF, setShowPDF] = useState(false);
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Button className="mx-auto m-5 d-block gap-3 align-items center d-flex" variant="primary" disabled>
            <Spinner animation="border" variant="danger" />
            <span className="fw-bold">Loading...</span>
        </Button>
    }
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => setShowPDF(true)}>Download PDF</button>
            {showPDF ? (
                <PDFDownloadLink document={<BlogPDF title={title} content={content} />} fileName={`${title}.pdf`}>
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
            ) : (
                <PDFViewer>
                    <BlogPDF title={title} content={content} />
                </PDFViewer>
            )}
        </div>
    );
};

export default Blog;