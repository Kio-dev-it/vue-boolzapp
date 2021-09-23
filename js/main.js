const app = new Vue ({
    el: "#root",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        isClicked: 0,
        newMessage: '',
        searchInput: '',
        messageClicked: undefined
    },
    methods: {
        addSentMessage: function(){
            let currentDate = dayjs().format('DD/MM/YYYY HH:mm:ss');
            const newSentMessage = {
                date: currentDate,
                message: '',
                status: 'sent'
            }
            if(this.newMessage != ''){
                newSentMessage.message =  this.newMessage; 
                this.contacts[this.isClicked].messages.push(newSentMessage);
                this.newMessage = '';
            }
        },
        guestAnswer: function(){
            setTimeout(
                ()=>{
                    let currentDate = dayjs().format('DD/MM/YYYY HH:mm:ss');

                    const newReceivedMessage = {
                        date: currentDate,
                        message: 'ok',
                        status: 'received'
                    };
                    this.contacts[this.isClicked].messages.push(newReceivedMessage);
                }, 1000
            );
        },
        isVisible: function(){
                this.contacts.forEach((elm, index) => {
                    elm.visible = elm.name.toLowerCase().includes(this.searchInput.toLowerCase())
                }
                );
        },
        showMenu: function(messageID){
            if (this.messageClicked == undefined){
                this.messageClicked =  messageID;
            } else {
                this.messageClicked =  undefined;
            }
        },
        removeMessage: function(messageID){
            this.contacts[this.isClicked].messages.splice(messageID, 1);
        }
        
    } 
    
});