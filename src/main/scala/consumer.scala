import java.util
import java.util.Properties

import org.apache.kafka.clients.consumer._

import scala.collection.JavaConverters._


object consumer extends App {

  val topic_name = "topic1"
  val consumer_group = "KafkaConsumerBatch"

  val props = new Properties()
  props.put("bootstrap.servers","localhost:9092")
  props.put("group.id",consumer_group)
  props.put("key.deserializer",  "org.apache.kafka.common.serialization.StringDeserializer")
  props.put("value.deserializer","org.apache.kafka.common.serialization.StringDeserializer")

  val kfk_consumer = new KafkaConsumer[String,String](props)
  kfk_consumer.subscribe(util.Collections.singletonList(topic_name))
  println("here")

  while(true){
    val records   = kfk_consumer.poll(100)
    for (record<-records.asScala){
      println(record)
    }


  }

}