async function initWebGPU(){
    if(!navigator.gpu) {
        throw new Error('Not Support WebGPU')
        const adapter = await navigator.gpu.requestAdapter()
    }
}