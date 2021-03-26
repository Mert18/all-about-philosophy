

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const sectionsDirectory = path.join(process.cwd(), '_sections');

export function getSectionsFiles() {
    return fs.readdirSync(sectionsDirectory);
}

export function getSectionData(sectionIdentifier) {
    const sectionSlug = sectionIdentifier.replace(/\.md$/, '');
    const filePath = path.join(sectionsDirectory, `${sectionSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const sectionData = {
        slug: sectionSlug,
        ...data,
        content: content
    };
    return sectionData;
};

export function getAllSections() {
    const sectionFiles = getSectionsFiles();
    const allSections = sectionFiles.map(sectionFile => (
        getSectionData(sectionFile)
    ));
    const sortedSections = allSections.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedSections;
}
