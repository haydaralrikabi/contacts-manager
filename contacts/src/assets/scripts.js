var status, alert;

function getStatus(status, message) {
    
    if (status == 'done') {
        alert = 'alert-success';
    }
    else if (status == 'fail') {
        alert = 'alert-danger';
    }

    return `
        <div class="alert ${alert} alert-dissmissible fade show mr-4" role="alert">
            <button class="close" type="button" data-dismiss="alert" aria-label="close">
                <span aria-hidden="true">&times;</span>
            </button>
            <span>${message}</span>
        </div>
    `;
}

// Create new contact
function newContact() {
    $.post($('form#new-contact').attr('action'), $('form#new-contact').serialize())
        .done(function(data){
            status = getStatus('done', 'The contact has been added successfully to the database.');
            $('#container').prepend(status);
        })
        .fail(function(xhr, settings, error){
            status = ('fail', xhr.responseText + '<br>Reason: ' + error);
            $('#container').prepend(status);
        });
}

function getContact(id) {
    $.get('/api/contacts/' + id)
        .done(function(data) {
            $('#container').html(data);
        })
        .fail(function(xhr, settings, error) {
            status = ('fail', xhr.responseText + '<br>Reason: ' + error);
            $('#container').prepend(status);
        });
}

function updateContact() {
    $.post({
        url: $('form#contact').attr('action'), 
        data: $('form#contact').serialize(),
        type: 'PUT'
    })
    .done(function(data){
        status = getStatus('done', 'The contact has been updated successfully.');
        $('#container').prepend(status);
    })
    .fail(function(data){
        status = ('fail', xhr.responseText + '<br>Reason: ' + error);
        $('#container').prepend(status);
    });
}

function deleteContact() {
    var process = confirm('Are you sure you want to delete this contact?');

    if (process) {
        $.post({
            url: $('form#contact').attr('action'), 
            data: $('form#contact').serialize(),
            type: 'DELETE'
        })
        .done(function(data){
            status = getStatus('done', 'The contact has been deleted successfully.');
            window.location.href = '/all';
            $('#container').prepend(status);
        })
        .fail(function(data){
            status = ('fail', xhr.responseText + '<br>Reason: ' + error);
            $('#container').prepend(status);
        });
    }
}