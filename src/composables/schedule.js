const date = new Date()

export const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

export const currentDate = date.toLocaleDateString().split('/').reverse()

export const generateDatePicker = (year, month) => {
        return new Array(31).fill('') 
        .map((_, index) => new Date(year, month-1, index+1))
        .filter((v) => v.getMonth() === month - 1)
}
