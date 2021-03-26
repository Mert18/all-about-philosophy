
import styles from './section-item.module.css';
import Link from 'next/link';

function SectionItem(props) {

    const { slug, title } = props.post;

    return (
        <li>
            <Link>
                <a>
                    <div>
                        <h1>{title}</h1>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default SectionItem;