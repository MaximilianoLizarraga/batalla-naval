const width: number = 8
const height: number = 8;

class Tablero{
    cells: boolean[][]

    constructor (size: number){
        let columns: boolean[] = []
        let rows: boolean[] = []

        for (let i = 0; i < width; i++)
            for (let j = 0; j < height; j++)
                columns.push(false)
    }
}