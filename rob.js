new Vue({
    el: '#app',
    data: {
        name: '',
        course: '',
        acceptancePeriod: '',
        defaultLastId: 3,
        students: [
            { id: 1, name: 'Karl Heinz R', course: 'Machine learning course', acceptancePeriod: 'January 2020' },
            { id: 2, name: 'Michel Platini', course: 'Web Engineer Course', acceptancePeriod: 'November 2019' },
            { id: 3, name: 'Inamoto', course: 'Web Engineer Course', acceptancePeriod: 'September 2019' }
        ]
    },
    methods: {
        addStudent: function() {
            let element = this.students[this.students.length - 1];
            let new_id = element.id + 1;
            return this.students.push({ id: new_id, name: this.name, course: this.course, acceptancePeriod: this.acceptancePeriod })
        }
    }
})