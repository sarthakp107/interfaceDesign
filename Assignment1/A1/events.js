
const { createApp, ref, computed,reactive } = Vue;

createApp({
    setup() {

        const events = ref([
            { eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8 },
            { eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6 },
            { eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10 },
            { eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4 },
            { eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6 },
            { eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5 },
            { eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7 },
            { eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12 },
            { eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business', durationhour: 9 },
            { eventid: 'EVT10010', eventname: 'E-commerce Strategies', category: 'Marketing', durationhour: 6 },
            { eventid: 'EVT10011', eventname: 'AI for Business', category: 'Business', durationhour: 8 },
            { eventid: 'EVT10012', eventname: 'IoT & Smart Devices Expo', category: 'Technology', durationhour: 7 },
            { eventid: 'EVT10013', eventname: 'Brand Strategy and Growth', category: 'Marketing', durationhour: 5 },
            { eventid: 'EVT10014', eventname: 'Investment and Wealth Management', category: 'Finance', durationhour: 6 },
            { eventid: 'EVT10015', eventname: 'Financial Technology (FinTech) Summit', category: 'Finance', durationhour: 8 },
            { eventid: 'EVT10016', eventname: 'AI Ethics and Regulations', category: 'Technology', durationhour: 4 },
            { eventid: 'EVT10017', eventname: 'Business Analytics Workshop', category: 'Business', durationhour: 6 },
            { eventid: 'EVT10018', eventname: 'SEO and Content Marketing', category: 'Marketing', durationhour: 7 },
            { eventid: 'EVT10019', eventname: 'Cryptocurrency Investment Strategies', category: 'Finance', durationhour: 9 },
            { eventid: 'EVT10020', eventname: 'Social Media Marketing Trends', category: 'Marketing', durationhour: 5 }
        ]);

        const filters = ref({
            eventid: '',
            eventname: '',
            durationhour: '',
            category: ''
        });
        const state = reactive({
            username: '',
            password: '',
            confirmPassword: '',
            category: 'Business', // Default category
            event: '',
            submitted: false
        });

        const submitForm = (e) => {
            e.preventDefault();
            console.log("submitting");
                    // Check if password and confirm password match
                    if (state.password === state.confirmPassword) {
                        state.submitted = true;
                    } else {
                        state.submitted = false;
                        alert("Passwords do not match!");
                    }
                    console.log(state);
        }


        const filteredEvents = computed(() => {
            return events.value.filter(event => {
                const matchesEventID = filters.value.eventid ? event.eventid.toLowerCase().includes(filters.value.eventid.toLowerCase()) : true;
                const matchesEventName = filters.value.eventname ? event.eventname.toLowerCase().includes(filters.value.eventname.toLowerCase()) : true;
                const matchesDuration = filters.value.durationhour ? event.durationhour === parseInt(filters.value.durationhour) : true;
                const matchesCategory = filters.value.category ? event.category === filters.value.category : true;

                return matchesEventID && matchesEventName && matchesDuration && matchesCategory;
            });
        });
        const filteredEventsByCategory = computed(() => {
            return events.value.filter(event => event.category === state.category);
        });

        return {
            state,
            events,
            filters,
            filteredEvents,
            filteredEventsByCategory,
            submitForm
        };
    }
}).mount('#app');
