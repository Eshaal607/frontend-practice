const response = await fetch("https://example.org/posts",{
    method: "POST",
    body: JSON.stringify({
        username: "tom"
    }),
    headers: {
        "Content-Type" : "application/json",
    },
})