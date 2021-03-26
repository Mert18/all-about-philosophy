
import SectionsGrid from '../sections/sections-grid';
import styles from './home-content.module.css';

function HomeContent(props) {
    return (
        <section>
            <div>
                <SectionsGrid sections={props.sections} />
            </div>
        </section>
    )
}

export default HomeContent;