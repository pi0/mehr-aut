SELECT program.*,ct.text AS typeText,cs.text AS subjectText, COUNT(programId) AS enrollerCount,e.fullName AS entityFullName,
-- if(now()>enrollmentEndDate,'a',if(now()<enrollmentStartDate,'b','c') ) as enrollmentStatus ,
                 IF(enrollmentStartDate IS NULL, NULL, IF(NOW()>enrollmentEndDate,'a', IF(NOW()<enrollmentStartDate,'b','c'))) AS enrollmentStatus,
                 IF(executionStartDate IS NULL, NULL, IF(NOW()>executionEndDate,'a', IF(NOW()<executionStartDate,'b','c'))) AS executionStatus,
-- if(now()>executionEndDate,'a',if(now()<executionStartDate,'b','c') ) as executionStatus,
                 ets.text
                   AS enrollmentStatusText,
                 ts.text AS executionStatusText
FROM program
  LEFT JOIN enroller ON program.id=programId
  LEFT JOIN constant ct ON `type`=ct.value
  LEFT JOIN constant cs ON `subject`=cs.value
  LEFT JOIN entitylist e ON e.id=program.entityId
  LEFT JOIN constant ets ON IF(enrollmentStartDate IS NULL OR enrollmentStartDate IS NULL, NULL, IF(NOW()>enrollmentEndDate,'a', IF(NOW()<enrollmentStartDate,'b','c'))=ets.value AND ets.category='timeStage')
  LEFT JOIN constant ts ON IF(executionEndDate IS NULL OR executionStartDate IS NULL, NULL, IF(NOW()>executionEndDate,'a', IF(NOW()<executionStartDate,'b','c'))=ts.value AND ts.category='timeStage')
WHERE (ct.category='programType' OR ct.category IS NULL) AND (cs.category='subject' OR cs.category IS NULL)
GROUP BY program.id