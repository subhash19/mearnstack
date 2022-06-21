import Highlight from 'react-highlight'

const Pretag = (props) => {
    return (
        <Highlight language={props.language}>
            {`${props.children}`}
        </Highlight>
    )
}

export default Pretag;