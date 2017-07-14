/**
  * Created by ashishkumar on 7/14/17.
  */
object producer extends App {
  import java.util.Properties
  import org.apache.kafka.clients.producer._
  val props = new Properties()
  props.put("bootstrap.server", "localhost:9092");
  props.put("acks","1")
  props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer")
  props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer")

  val producer = new KafkaProducer[String, String](props)

  val topic="kafka"


  for(i<- 1 to 50) {
    val record = new ProducerRecord(topic, "key"+i, "value"+i)
    producer.send(record)
  }

  producer.close()

}
