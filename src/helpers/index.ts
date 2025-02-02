export const formatCurrency = (amount : number) => {
    return Intl.NumberFormat('en-US',{style : "currency", currency: "USD"}).format(amount)
}

export const formatDate = (dateStr : string) : string => {
    const dateObject = new Date(dateStr)
    const dateOptions : Intl.DateTimeFormatOptions = {
        weekday :"long",
        year: "numeric",
        month : "long",
        day : "numeric"
    }
    return Intl.DateTimeFormat('es-ES',dateOptions).format(dateObject)
}       