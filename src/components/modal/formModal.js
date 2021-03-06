import React from 'react';

const FormModal = () => {
    return (
            <div class="ui active modal">
                <div class="ui icon header">
                    <i class="archive icon"></i>
                    Archive Old Messages
                </div>
                <div class="content">
                    <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
                </div>
                <div class="actions">
                    <div class="ui red basic cancel inverted button">
                    <i class="remove icon"></i>
                    No
                    </div>
                    <div class="ui green ok inverted button">
                    <i class="checkmark icon"></i>
                    Yes
                    </div>
                </div>
            </div>
    );
}

export default FormModal;