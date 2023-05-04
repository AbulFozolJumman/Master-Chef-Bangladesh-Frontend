import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../Provider/AuthProvider';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import BlogPDF from './BlogPDF';

// Site Blog
const Blog = () => {
    const [title, setTitle] = useState('My Blog');
    const [content, setContent] = useState(`
    Q1 . Tell us the differences between uncontrolled and controlled components.

    Controlled Component :
    A component in react is referred to as controlled when we let react control the component for us. It means that the component controls the input form, and all of its changes are completely driven by event handlers . For example, a controlled component would be an input field that uses the value attribute to set the value, and also uses an onChange event handler to update the state of the component with the new value.

    Uncontrolled Component :
    Uncontrolled components are components where the form data is handled by the DOM itself instead of the component. This means that the component doesn't have control over the input value once it has been rendered. Instead, it relies on the DOM to manage the state of the input value.For example, an uncontrolled component would be an input field that doesn't use the value attribute to set the value. Instead, the value is set directly on the DOM element, and the component retrieves the value using a ref or other DOM manipulation methods.


    Q2 . How to validate React props using PropTypes?
    React provides a utility library called PropTypes that allows to validate the props passed to a component. PropTypes helps to ensure that components receive the correct data types and values and can provide helpful error messages during development if there is an issue with the data being passed.

    Here are some other PropTypes validators :

    (i) PropTypes.string
    (ii) PropTypes.number
    (iii) PropTypes.bool
    (iv) PropTypes.object
    (v) PropTypes.array
    (vi) PropTypes.func etc.


    Q3 . Tell us the difference between nodejs and express js.

    Node JS :
    Node.js is an open-source JavaScript runtime environment that allows developers to run JavaScript code on the server-side. It provides an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js is commonly used for building server-side applications, command-line tools, and APIs.

    Express JS :
    Express.js is a web application framework for Node.js. It provides a set of tools and features for building web applications such as routing, middleware, templating engines, and more. Express.js simplifies the process of building web applications by providing a structure and common set of features that can be used to handle HTTP requests and responses.
    
    
    Q4 . What is a custom hook, and why will you create a custom hook?

    The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic , anyone can put that code inside a custom hook and reuse it.

    Custom hooks follow a specific naming convention, where the name starts with "use" followed by a descriptive term such as "useFetch", "useForm", or "useLocalStorage" to indicate that it is a hook and to provide a hint about its functionality. Custom hooks are simply regular JavaScript functions but they can use built-in React hooks, such as useState, useEffect, and useContext to leverage Reacts features and capabilities.
  `);

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
            <h1 className='text-center'>{title}</h1>
            <pre><h4>{content}</h4></pre>
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