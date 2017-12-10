let Developer = new Vue({
    el: '#app',
    data: {
        newDev: {
            username: '',
            password: '',
            name: '',
            portfolioSite: '',
            description: '',
            file: '',
        },
        
    },
    methods: {
        createProfile: function(evt) {
            evt.preventDefault();
            var vm = this;
            let formData = new FormData();
            formData.append('username', this.newDev.username);
            formData.append('password', this.newDev.password);
            formData.append('name', this.newDev.name);
            formData.append('portfolioSite', this.newDev.portfolioSite);
            formData.append('description', this.newDev.description);
            formData.append('file', this.newDev.file);
            console.log(formData)
            $.post('/new-dev', formData, function(datafromserver){
                console.log("Post to /new-dev a success!")
            })
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.newDev.file = files[0];
        },
        removeImage: function (e) {
            this.newDev.picture = '';
        },
    }
});