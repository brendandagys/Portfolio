use aws_sdk_sns::{Client, Error};
use lambda_http::{run, service_fn, Body, Request, Response};
use serde::Deserialize;
use std::env;

#[derive(Deserialize)]
struct RequestBody {
    email: String,
    name: String,
    message: String,
}

#[tokio::main]
async fn main() -> Result<(), lambda_http::Error> {
    run(service_fn(handler)).await?;
    Ok(())
}

async fn handler(request: Request) -> Result<Response<Body>, lambda_http::Error> {
    let topic_arn = env::var("SNS_TOPIC_ARN")?;

    match request.body() {
        Body::Text(request_body) => match serde_json::from_str::<RequestBody>(request_body) {
            Ok(body) => {
                publish_message(&topic_arn, &body.email, &body.name, &body.message).await?;

                Ok(Response::builder()
                    .status(200)
                    .body(Body::Text("Successfully sent message!".into()))?)
            }
            Err(e) => Ok(Response::builder()
                .status(400)
                .body(Body::Text(format!("Invalid request body: {:?}.", e).into()))?),
        },
        _ => Ok(Response::builder()
            .status(400)
            .body(Body::Text("Invalid body type".into()))?),
    }
}

async fn publish_message(
    topic_arn: &str,
    email: &str,
    name: &str,
    message: &str,
) -> Result<(), Error> {
    let config = aws_config::load_from_env().await;
    let client = Client::new(&config);

    let full_message = format!("From: {}\nName: {}\nMessage: {}", email, name, message);

    client
        .publish()
        .topic_arn(topic_arn)
        .message(full_message)
        .send()
        .await?;

    Ok(())
}
