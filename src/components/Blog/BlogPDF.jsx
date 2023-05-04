import React from 'react';
import { Document, Page, View, Text } from '@react-pdf/renderer';

// Blog PDF generator
const BlogPDF = ({ title, content }) => {
    return (
        <Document>
            <Page size="A4" style={{ margin: 50 }}>
                <View>
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>{title}</Text>
                    <Text style={{ fontSize: 16 }}>{content}</Text>
                </View>
            </Page>
        </Document>
    );
};

export default BlogPDF;