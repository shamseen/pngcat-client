import * as searchStyle from './Search.module.css'

export default function SearchTextInput({ state, updateState, placeholder }) {

    return (
        <input
            className={searchStyle.input}
            type="text"
            value={state}
            placeholder={`e.g. ${placeholder}`}
            onChange={(e) => { updateState(e.target.value) }}
        />
    )
}