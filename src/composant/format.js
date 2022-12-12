


export default function format (element){
    return element.replace(/ /g, "_").replace(/[éèô]/g, "e").replace(/\//g, "_").toLowerCase()
}