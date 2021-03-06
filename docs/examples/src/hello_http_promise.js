// Licensed to the Apache Software Foundation (ASF) under one or more contributor
// license agreements; and to You under the Apache License, Version 2.0.

/*
 * This action returns a greeting wrapped into a HTTP response that can be used
 * by the API Gateway. It also checks for mandatory attributes and returns a
 * HTTP error response when any attribute is missing. It uses Promise.resolve
 * and Promise.reject to handle the response.
 */
function main(params) {
    if(params.name && params.place) {
        return Promise.resolve({
            body: {
                greeting: `Hello ${params.name} from ${params.place}!`
            },
            statusCode: 200,
            headers: {'Content-Type': 'application/json'}
        });
    } else {
        return Promise.reject({
            body: {
                message: 'Attributes name and place are mandatory'
            },
            statusCode: 400,
            headers: {'Content-Type': 'application/json'}
        });
    }
}
