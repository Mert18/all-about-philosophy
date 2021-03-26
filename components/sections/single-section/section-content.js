
import styles from './section-content.module.css';
import ReactMarkdown from 'react-markdown';
import SectionHeader from './section-header';

function SectionContent(props) {

    const { section } = props;

    return (
        <article>
            <SectionHeader title={section.title} />

            <ReactMarkdown>
                {section.content}
            </ReactMarkdown>
        </article>
    )
}

export default SectionContent;