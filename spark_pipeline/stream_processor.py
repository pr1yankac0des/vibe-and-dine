from pyspark.sql import SparkSession
from pyspark.sql.functions import from_json, col
from pyspark.sql.types import StructType, StringType

spark = SparkSession.builder.appName("VibeStream").getOrCreate()

schema = StructType().add("user_id", StringType()).add("venue_id", StringType()).add("action", StringType())

df = spark.readStream.format("kafka") \
    .option("kafka.bootstrap.servers", "localhost:9092") \
    .option("subscribe", "vibe-events") \
    .load()

parsed = df.selectExpr("CAST(value AS STRING)").select(from_json(col("value"), schema).alias("data")).select("data.*")

parsed.writeStream.format("console").start().awaitTermination()