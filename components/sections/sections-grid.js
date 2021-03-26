
import SectionItem from './section-item';
import styles from './sections-grid.module.css';

function SectionsGrid(props) {
    const { sections } = props;

    return (
        <div>
            <ul>
                {sections.map((section) => (
                    <SectionItem key={section.slug} section={section} />
                ))}
            </ul>
        </div>
    )
}

export default SectionsGrid;