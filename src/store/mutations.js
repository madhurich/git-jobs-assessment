const setJobs = (state, payload) => {
    state.jobs = payload.isFilter ? [...payload.jobs] : [...state.jobs, ...payload.jobs];
};

const toggleMode = (state, payload) => {
    state.nightMode = !state.nightMode;
};
const noResults = (state, payload) => {
    state.noResults = payload.value;
};
const failure = (state, payload) => {
    state.isFailure = payload.value;
};

export default {
    setJobs,
    toggleMode,
    noResults,
    failure,
};