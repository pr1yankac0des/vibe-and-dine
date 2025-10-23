from apscheduler.schedulers.background import BackgroundScheduler
import subprocess
import time

def run_flask():
    subprocess.Popen(["python", "flask_ingest/app.py"])

def run_spark():
    subprocess.Popen(["python", "spark_pipeline/stream_processor.py"])

if __name__ == "__main__":
    scheduler = BackgroundScheduler()
    
    # Schedule Flask to run once at startup
    run_flask()

    # Schedule Spark job every hour
    scheduler.add_job(run_spark, 'interval', hours=1)

    scheduler.start()
    print("Scheduler started. Press Ctrl+C to exit.")

    try:
        while True:
            time.sleep(60)
    except (KeyboardInterrupt, SystemExit):
        scheduler.shutdown()