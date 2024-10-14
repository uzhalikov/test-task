
export const getLogs = async () => {
    return await fetch('http://localhost:8000/api/logs/').then(response => response.json())
}
export const getLog = async (logId) => {
    return await fetch(`http://localhost:8000/api/logs/${logId}`).then(response => response.json())
}