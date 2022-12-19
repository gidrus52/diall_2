<template>
    <v-navigation-drawer
            v-model="rightDrawer"
            right
            width="580"
            dark
            absolute
    >
        <v-list-item style="height: 75px">
            <v-list-item-content>
                <v-list-item-title>Текущие чаты</v-list-item-title>
            </v-list-item-content>
            <mdiRoundButton :name-icon="'mdi-cancel'"
                            :property-data="propertyData"></mdiRoundButton>
        </v-list-item>

        <v-divider></v-divider>
        <v-card class="ma-4" height="820">
            <Chat
                    :participants="participants"
                    :myself="myself"
                    :messages="messages"
                    :chat-title="chatTitle"
                    :placeholder="placeholder"
                    :colors="colors"
                    :border-style="borderStyle"
                    :hide-close-button="hideCloseButton"
                    :close-button-icon-size="closeButtonIconSize"
                    :submit-icon-size="submitIconSize"
                    :submit-image-icon-size="24"
                    :load-more-messages="toLoad.length > 0 ? loadMoreMessages : null"
                    :async-mode="asyncMode"
                    :scroll-bottom="scrollBottom"
                    :display-header="true"
                    :send-images="true"
                    :profile-picture-config="profilePictureConfig"
                    @onImageClicked="onImageClicked"
                    @onImageSelected="onImageSelected"
                    @onMessageSubmit="onMessageSubmit"
                    @onType="onType"
                    @onClose="onClose">
                <template v-slot:header>
                    <div class="ma-2">
                        Мой чат. Проект № 1.
                    </div>
                </template>
            </Chat>
        </v-card>

    </v-navigation-drawer>
</template>

<script>
    import mdiRoundButton from '../button/mdiRoundButton'
    import {Chat} from 'vue-quick-chat'
    import {eventBus} from "../../main"
    import {mapGetters,mapActions} from 'vuex'
    import 'vue-quick-chat/dist/vue-quick-chat.css'

    export default {
        name: "DashboardDriveComponentRight",
        data: () => ({
            rightDrawer: false,
            propertyData: {
                event: 'rightMenu'
            },
            mini: true,
            visible: true,
            participants: [
                {
                    name: 'Николай К.',
                    id: 1,
                    profilePicture: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg'
                },
                {
                    name: 'Андрей З.',
                    id: 2,
                    profilePicture: 'https://lh3.googleusercontent.com/-G1d4-a7d_TY/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPez_wX5UCJztzEUeCxOd7HBK7-jA.CMID/s83-c/photo.jpg'
                }
            ],
            myself: {
                name: 'Сергей С.',
                id: 3,
                profilePicture: 'https://cdn.vuetifyjs.com/images/john.jpg'
            },
            messages: [
                {
                    content: 'полученное сообщение',
                    myself: false,
                    participantId: 1,
                    timestamp: {year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123},
                    type: 'text'
                },
                {
                    content: 'отправленное сообщение',
                    myself: true,
                    participantId: 3,
                    timestamp: {year: 2019, month: 4, day: 5, hour: 19, minute: 10, second: 3, millisecond: 123},
                    type: 'text'
                },
                {
                    content: 'другое полученное сообщение',
                    myself: false,
                    participantId: 2,
                    timestamp: {year: 2019, month: 5, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123},
                    type: 'text'
                }
            ],
            chatTitle: 'ауцацуауц',
            placeholder: 'send your message',
            colors: {
                header: {
                    bg: 'rgba(162, 20, 93, 0.8)',
                    text: '#fff'
                },
                message: {
                    myself: {
                        bg: '#fff',
                        text: '#bdb8b8'
                    },
                    others: {
                        bg: '#fb4141',
                        text: '#fff'
                    },
                    messagesDisplay: {
                        bg: '#f7f3f3'
                    }
                },
                submitIcon: '#b91010',
                submitImageIcon: '#b91010',
            },
            borderStyle: {
                topLeft: "10px",
                topRight: "10px",
                bottomLeft: "10px",
                bottomRight: "10px",
            },
            hideCloseButton: false,
            submitIconSize: 25,
            closeButtonIconSize: "20px",
            asyncMode: false,
            toLoad: [
                {
                    content: 'Здравствуйте, Сергей, объясните пожалуйста пункт 1 задания 2?',
                    myself: false,
                    participantId: 2,
                    timestamp: {year: 2011, month: 3, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123},
                    uploaded: true,
                    viewed: true,
                    type: 'text'
                },
                {
                    content: "Здравствуйте, Андрей, необходимо откорректировать цвет основного модуля в задании, упомняутого Вами.",
                    myself: true,
                    participantId: 3,
                    timestamp: {year: 2010, month: 1, day: 5, hour: 19, minute: 10, second: 3, millisecond: 123},
                    uploaded: true,
                    viewed: true,
                    type: 'text'
                },
            ],
            scrollBottom: {
                messageSent: true,
                messageReceived: false
            },
            displayHeader: true,
            profilePictureConfig: {
                others: true,
                myself: true,
                styles: {
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%'
                }
            },

        }),
        components: {
            mdiRoundButton, Chat
        },
        computed: {
            ...mapGetters(['right_menu']),
            rigth_menu_state() {
                this.rightDrawer = this.right_menu
                return this.right_menu
            }
        },
        methods: {
            ...mapActions(['right_menu_action']),
            onType: function (event) {
                //here you can set any behavior
            },
            loadMoreMessages(resolve) {
                setTimeout(() => {
                    resolve(this.toLoad); //We end the loading state and add the messages
                    //Make sure the loaded messages are also added to our local messages copy or they will be lost
                    this.messages.unshift(...this.toLoad);
                    this.toLoad = [];
                }, 1000);
            },
            onMessageSubmit: function (message) {
                /*
                * example simulating an upload callback.
                * It's important to notice that even when your message wasn't send
                * yet to the server you have to add the message into the array
                */
                this.messages.push(message);

                /*
                * you can update message state after the server response
                */
                // timeout simulating the request
                setTimeout(() => {
                    message.uploaded = true
                }, 2000)
            },
            onClose() {
                this.visible = false;
            },
            onImageSelected(files, message) {
                let src = 'https://149364066.v2.pressablecdn.com/wp-content/uploads/2017/03/vue.jpg'
                this.messages.push(message);
                /**
                 * This timeout simulates a requisition that uploads the image file to the server.
                 * It's up to you implement the request and deal with the response in order to
                 * update the message status and the message URL
                 */
                setTimeout((res) => {
                    message.uploaded = true
                    message.src = res.src
                }, 3000, {src});
            },
            onImageClicked(message) {
                /**
                 * This is the callback function that is going to be executed when some image is clicked.
                 * You can add your code here to do whatever you need with the image clicked. A common situation is to display the image clicked in full screen.
                 */
                console.log('Image clicked', message.src)
            }
        },
        watch: {
            rigth_menu_state(e) {

            }
        },
        mounted() {

        },
        created() {
            eventBus.$on('switcher',()=>{
                this.right_menu_action(false)
            })
        }
    }
</script>

<style scoped>

</style>