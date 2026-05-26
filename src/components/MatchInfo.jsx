import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function MatchInfo() {
  return (
    <motion.div
      className="info"
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <p>
        <Calendar size={22} /> 18 DE MAIO
      </p>

      <p>
        <Clock size={22} /> 20:00
      </p>

      <p>
        <MapPin size={22} /> CAMPO DO MORRO
      </p>
    </motion.div>
  );
}