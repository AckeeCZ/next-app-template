export interface ContactRequestPayload {
    to?: string;
    replyTo: string;
    html: string;
    subject: string;
}

export interface ContactData {
    success: boolean;
}
