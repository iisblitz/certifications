import "./BuildaMarkdownPreviewer.css"
import {marked} from "marked"
import DOMPurify from 'isomorphic-dompurify';
import {useState} from "react"


const BuildaMarkdownPreviewer = () => {
    const [previewMarkdown, setPreviewMarkdown] = useState('<h1>Welcome</h1><h2>this is my markdown previewer</h2><a href="https://iisblitz.github.io/certifications/">return to home</a> <blockquote>or try it at your leasure</blockquote><p>This is an example of <code>inline code</code> within a sentence.</p><ul><li><b>this can have lists</b></list></ul><pre><code>function greet(){console.log("Hello, World!")}</code></pre><img src="https://scontent.fmex15-1.fna.fbcdn.net/v/t39.30808-6/399134297_6792390644131240_8602766449343166407_n.jpg?stp=dst-jpg_s720x720&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFvCmSNC0uY3RLvKf42KVW0DL0b9MJm2OkMvRv0wmbY6V-UCCKfL2GuGBdMm9zHOobYLADh_KV8oXW66ibu8QgY&_nc_ohc=nxBFxyZ6lQQAX9UJx4R&_nc_ht=scontent.fmex15-1.fna&oh=00_AfDeIYud038PjwqNsxYS7SSL_jlc--TPNCik3FHBtSHmIg&oe=654E60CB" alt="randomImage" width="100" height=100"">')
    
    function handleChange(e){
        setPreviewMarkdown(e.target.value)
    }

    return ( 
        <div className="project">
        <textarea id="editor" className="editor" onChange={handleChange}></textarea>
        <div id="preview" className="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(previewMarkdown))}}></div>
    </div> );
}
 
export default BuildaMarkdownPreviewer;