// Counter for anonymous user names
var anonymousUserCounter = 1;

// Function to add a new comment
function addComment() {
    var commentInput = document.getElementById("commentInput");
    var commentText = commentInput.value.trim();
    if (commentText !== "") {
        var commentSection = document.getElementById("commentSection");

        var currentTime = new Date();
        var timeString = currentTime.toLocaleString();

        var commentContainer = document.createElement("div");
        commentContainer.classList.add("comment");

        var commentContent = document.createElement("div");
        commentContent.classList.add("comment-content");
        commentContent.textContent = commentText;

        var commentInfo = document.createElement("div");
        commentInfo.classList.add("comment-info");
        commentInfo.textContent = "Posted by AnonymousUser" + anonymousUserCounter + " at " + timeString;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Comment";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function() {
            commentContainer.remove();
        };

        commentContainer.appendChild(commentContent);
        commentContainer.appendChild(commentInfo);
        commentContainer.appendChild(deleteButton);

        commentSection.appendChild(commentContainer);
        commentInput.value = "";

        anonymousUserCounter++;
    }
}
