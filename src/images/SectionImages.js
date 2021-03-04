import Images from './images'

const SectionImages = (props) => {
    return (
        <section id="sectionImages">
        <Images search={props.search} />
        </section>
    )
}

export default SectionImages