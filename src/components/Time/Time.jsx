import timeclass from "./Time.styles";

function Time(length) {
    return (
        <div class={timeclass}>
            <svg class="w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{length}</span>
        </div>
    )
}

export default Time;