export function addTableRedData(tabledata) {
    console.log('Save tabledata...', tabledata);
    var tables = JSON.parse(localStorage.getItem('tables'));
    tables.red=(tabledata);
    console.log('Save str...', tables);
    localStorage.setItem('tables',JSON.stringify(tables));

}

export function getTableRedData() {
    let str = localStorage.getItem('tables');
    let tables=JSON.parse(str);
    console.log('get tabledata...',str);
    return tables;

    if(!tables){
        return [];
    }
}


export function addTableGreenData(tabledata) {
    console.log('Save tabledata...', tabledata);
    var tables = JSON.parse(localStorage.getItem('tables'));
    tables.green=(tabledata);
    console.log('Save str...', tables);
    localStorage.setItem('tables',JSON.stringify(tables));

}

export function getTableGreenData() {
    let str = localStorage.getItem('tables');
    let tables=JSON.parse(str);
    console.log('get tabledata...',str);
    return tables;

    if(!tables){
        return [];
    }
}


export function addTableBlueData(tabledata) {
    console.log('Save tabledata...', tabledata);
    var tables = JSON.parse(localStorage.getItem('tables'));
    tables.blue=(tabledata);
    console.log('Save str...', tables);
    localStorage.setItem('tables',JSON.stringify(tables));

}

export function getTableBlueData() {
    let str = localStorage.getItem('tables');
    let tables=JSON.parse(str);
    console.log('get tabledata...',str);
    return tables;

    if(!tables){
        return [];
    }
}


