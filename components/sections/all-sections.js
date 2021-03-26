
import SectionsGrid from './sections-grid'
import styles from './all-sections.module.css'

function AllSections(props) {
    return (
        <section>
            <SectionsGrid sections={props.sections} />
        </section>
    )
}

export default AllSections;