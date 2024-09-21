```
cargo lambda build --release --arm64

cd target/lambda/portfolio-contact-lambda
zip -r bin.zip bootstrap
aws s3 cp bin.zip s3://portfolio-lambda-binary/bin.zip

aws lambda update-function-code --function-name PublishToPortfolioSNSLambda --s3-bucket portfolio-lambda-binary --s3-key bin.zip
```
