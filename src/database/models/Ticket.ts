import mongoose  from "mongoose"

const TicketS = new mongoose.Schema<any>({
    user: String,
    channel: String,
})

const Ticket = mongoose.model('Ticket', TicketS, 'tickets')

export { Ticket }